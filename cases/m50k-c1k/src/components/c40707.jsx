import React from 'react';
const LABEL_40707 = 'component_40707';
export function Component40707({ value = 40707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40707, 'data-value': derived.doubled }, children);
}
export default Component40707;
