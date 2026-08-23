import React from 'react';
const LABEL_19016 = 'component_19016';
export function Component19016({ value = 19016, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19016, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19016, 'data-value': derived.doubled }, children);
}
export default Component19016;
