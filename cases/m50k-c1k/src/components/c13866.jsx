import React from 'react';
const LABEL_13866 = 'component_13866';
export function Component13866({ value = 13866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13866, 'data-value': derived.doubled }, children);
}
export default Component13866;
