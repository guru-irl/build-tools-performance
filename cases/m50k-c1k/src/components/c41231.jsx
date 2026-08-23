import React from 'react';
const LABEL_41231 = 'component_41231';
export function Component41231({ value = 41231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41231, 'data-value': derived.doubled }, children);
}
export default Component41231;
