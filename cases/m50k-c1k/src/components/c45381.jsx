import React from 'react';
const LABEL_45381 = 'component_45381';
export function Component45381({ value = 45381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45381, 'data-value': derived.doubled }, children);
}
export default Component45381;
