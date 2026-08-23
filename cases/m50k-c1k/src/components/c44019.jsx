import React from 'react';
const LABEL_44019 = 'component_44019';
export function Component44019({ value = 44019, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44019, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44019, 'data-value': derived.doubled }, children);
}
export default Component44019;
