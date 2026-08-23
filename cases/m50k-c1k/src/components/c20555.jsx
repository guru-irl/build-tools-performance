import React from 'react';
const LABEL_20555 = 'component_20555';
export function Component20555({ value = 20555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20555, 'data-value': derived.doubled }, children);
}
export default Component20555;
