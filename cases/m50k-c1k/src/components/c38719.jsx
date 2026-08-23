import React from 'react';
const LABEL_38719 = 'component_38719';
export function Component38719({ value = 38719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38719, 'data-value': derived.doubled }, children);
}
export default Component38719;
