import React from 'react';
const LABEL_18486 = 'component_18486';
export function Component18486({ value = 18486, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18486, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18486, 'data-value': derived.doubled }, children);
}
export default Component18486;
