import React from 'react';
const LABEL_11142 = 'component_11142';
export function Component11142({ value = 11142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11142, 'data-value': derived.doubled }, children);
}
export default Component11142;
