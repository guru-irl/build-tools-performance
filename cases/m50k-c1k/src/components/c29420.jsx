import React from 'react';
const LABEL_29420 = 'component_29420';
export function Component29420({ value = 29420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29420, 'data-value': derived.doubled }, children);
}
export default Component29420;
