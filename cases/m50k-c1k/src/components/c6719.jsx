import React from 'react';
const LABEL_6719 = 'component_6719';
export function Component6719({ value = 6719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6719, 'data-value': derived.doubled }, children);
}
export default Component6719;
