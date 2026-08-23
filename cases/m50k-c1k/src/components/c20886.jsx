import React from 'react';
const LABEL_20886 = 'component_20886';
export function Component20886({ value = 20886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20886, 'data-value': derived.doubled }, children);
}
export default Component20886;
