import React from 'react';
const LABEL_4121 = 'component_4121';
export function Component4121({ value = 4121, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4121, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4121, 'data-value': derived.doubled }, children);
}
export default Component4121;
