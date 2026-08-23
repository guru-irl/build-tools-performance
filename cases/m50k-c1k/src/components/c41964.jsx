import React from 'react';
const LABEL_41964 = 'component_41964';
export function Component41964({ value = 41964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41964, 'data-value': derived.doubled }, children);
}
export default Component41964;
