import React from 'react';
const LABEL_40015 = 'component_40015';
export function Component40015({ value = 40015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40015, 'data-value': derived.doubled }, children);
}
export default Component40015;
