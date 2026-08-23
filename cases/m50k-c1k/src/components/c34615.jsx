import React from 'react';
const LABEL_34615 = 'component_34615';
export function Component34615({ value = 34615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34615, 'data-value': derived.doubled }, children);
}
export default Component34615;
