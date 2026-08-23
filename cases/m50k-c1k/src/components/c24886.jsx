import React from 'react';
const LABEL_24886 = 'component_24886';
export function Component24886({ value = 24886, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24886, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24886, 'data-value': derived.doubled }, children);
}
export default Component24886;
