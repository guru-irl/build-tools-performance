import React from 'react';
const LABEL_4866 = 'component_4866';
export function Component4866({ value = 4866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4866, 'data-value': derived.doubled }, children);
}
export default Component4866;
