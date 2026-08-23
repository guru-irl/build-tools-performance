import React from 'react';
const LABEL_27282 = 'component_27282';
export function Component27282({ value = 27282, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27282, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27282, 'data-value': derived.doubled }, children);
}
export default Component27282;
