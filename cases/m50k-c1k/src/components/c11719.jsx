import React from 'react';
const LABEL_11719 = 'component_11719';
export function Component11719({ value = 11719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11719, 'data-value': derived.doubled }, children);
}
export default Component11719;
