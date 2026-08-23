import React from 'react';
const LABEL_22936 = 'component_22936';
export function Component22936({ value = 22936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22936, 'data-value': derived.doubled }, children);
}
export default Component22936;
