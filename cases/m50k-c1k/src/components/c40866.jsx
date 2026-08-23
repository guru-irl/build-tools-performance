import React from 'react';
const LABEL_40866 = 'component_40866';
export function Component40866({ value = 40866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40866, 'data-value': derived.doubled }, children);
}
export default Component40866;
