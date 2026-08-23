import React from 'react';
const LABEL_39420 = 'component_39420';
export function Component39420({ value = 39420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39420, 'data-value': derived.doubled }, children);
}
export default Component39420;
