import React from 'react';
const LABEL_46704 = 'component_46704';
export function Component46704({ value = 46704, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46704, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46704, 'data-value': derived.doubled }, children);
}
export default Component46704;
