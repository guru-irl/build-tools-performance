import React from 'react';
const LABEL_28381 = 'component_28381';
export function Component28381({ value = 28381, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28381, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28381, 'data-value': derived.doubled }, children);
}
export default Component28381;
