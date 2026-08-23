import React from 'react';
const LABEL_19420 = 'component_19420';
export function Component19420({ value = 19420, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19420, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19420, 'data-value': derived.doubled }, children);
}
export default Component19420;
