import React from 'react';
const LABEL_40463 = 'component_40463';
export function Component40463({ value = 40463, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40463, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40463, 'data-value': derived.doubled }, children);
}
export default Component40463;
