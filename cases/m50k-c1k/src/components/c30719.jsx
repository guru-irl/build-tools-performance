import React from 'react';
const LABEL_30719 = 'component_30719';
export function Component30719({ value = 30719, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30719, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30719, 'data-value': derived.doubled }, children);
}
export default Component30719;
