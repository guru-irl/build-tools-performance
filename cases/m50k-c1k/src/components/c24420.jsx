import React from 'react';
const LABEL_24420 = 'component_24420';
export function Component24420({ value = 24420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24420, 'data-value': derived.doubled }, children);
}
export default Component24420;
