import React from 'react';
const LABEL_18325 = 'component_18325';
export function Component18325({ value = 18325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18325, 'data-value': derived.doubled }, children);
}
export default Component18325;
