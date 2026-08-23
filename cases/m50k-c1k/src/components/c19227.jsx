import React from 'react';
const LABEL_19227 = 'component_19227';
export function Component19227({ value = 19227, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19227, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19227, 'data-value': derived.doubled }, children);
}
export default Component19227;
