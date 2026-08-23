import React from 'react';
const LABEL_41748 = 'component_41748';
export function Component41748({ value = 41748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41748, 'data-value': derived.doubled }, children);
}
export default Component41748;
