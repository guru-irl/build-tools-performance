import React from 'react';
const LABEL_28142 = 'component_28142';
export function Component28142({ value = 28142, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28142, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28142, 'data-value': derived.doubled }, children);
}
export default Component28142;
