import React from 'react';
const LABEL_45317 = 'component_45317';
export function Component45317({ value = 45317, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45317, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45317, 'data-value': derived.doubled }, children);
}
export default Component45317;
