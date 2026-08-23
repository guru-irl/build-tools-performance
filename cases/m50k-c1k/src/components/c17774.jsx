import React from 'react';
const LABEL_17774 = 'component_17774';
export function Component17774({ value = 17774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17774, 'data-value': derived.doubled }, children);
}
export default Component17774;
