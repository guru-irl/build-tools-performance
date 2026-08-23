import React from 'react';
const LABEL_30555 = 'component_30555';
export function Component30555({ value = 30555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30555, 'data-value': derived.doubled }, children);
}
export default Component30555;
