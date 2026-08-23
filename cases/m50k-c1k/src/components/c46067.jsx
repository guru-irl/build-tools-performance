import React from 'react';
const LABEL_46067 = 'component_46067';
export function Component46067({ value = 46067, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46067, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46067, 'data-value': derived.doubled }, children);
}
export default Component46067;
