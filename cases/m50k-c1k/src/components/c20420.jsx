import React from 'react';
const LABEL_20420 = 'component_20420';
export function Component20420({ value = 20420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20420, 'data-value': derived.doubled }, children);
}
export default Component20420;
