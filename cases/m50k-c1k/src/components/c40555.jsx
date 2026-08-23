import React from 'react';
const LABEL_40555 = 'component_40555';
export function Component40555({ value = 40555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40555, 'data-value': derived.doubled }, children);
}
export default Component40555;
