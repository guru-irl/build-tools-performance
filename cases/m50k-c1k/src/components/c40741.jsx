import React from 'react';
const LABEL_40741 = 'component_40741';
export function Component40741({ value = 40741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40741, 'data-value': derived.doubled }, children);
}
export default Component40741;
