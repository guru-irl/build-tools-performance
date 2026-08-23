import React from 'react';
const LABEL_17381 = 'component_17381';
export function Component17381({ value = 17381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17381, 'data-value': derived.doubled }, children);
}
export default Component17381;
