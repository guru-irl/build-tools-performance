import React from 'react';
const LABEL_20832 = 'component_20832';
export function Component20832({ value = 20832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20832, 'data-value': derived.doubled }, children);
}
export default Component20832;
