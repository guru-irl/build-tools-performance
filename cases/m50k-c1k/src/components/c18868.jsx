import React from 'react';
const LABEL_18868 = 'component_18868';
export function Component18868({ value = 18868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18868, 'data-value': derived.doubled }, children);
}
export default Component18868;
