import React from 'react';
const LABEL_41869 = 'component_41869';
export function Component41869({ value = 41869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41869, 'data-value': derived.doubled }, children);
}
export default Component41869;
