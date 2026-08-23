import React from 'react';
const LABEL_4107 = 'component_4107';
export function Component4107({ value = 4107, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4107, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4107, 'data-value': derived.doubled }, children);
}
export default Component4107;
