import React from 'react';
const LABEL_40186 = 'component_40186';
export function Component40186({ value = 40186, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40186, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40186, 'data-value': derived.doubled }, children);
}
export default Component40186;
