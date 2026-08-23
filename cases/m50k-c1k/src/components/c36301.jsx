import React from 'react';
const LABEL_36301 = 'component_36301';
export function Component36301({ value = 36301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36301, 'data-value': derived.doubled }, children);
}
export default Component36301;
