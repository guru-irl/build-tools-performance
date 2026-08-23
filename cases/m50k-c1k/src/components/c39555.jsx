import React from 'react';
const LABEL_39555 = 'component_39555';
export function Component39555({ value = 39555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39555, 'data-value': derived.doubled }, children);
}
export default Component39555;
