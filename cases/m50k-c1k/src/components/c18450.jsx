import React from 'react';
const LABEL_18450 = 'component_18450';
export function Component18450({ value = 18450, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18450, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18450, 'data-value': derived.doubled }, children);
}
export default Component18450;
