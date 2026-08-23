import React from 'react';
const LABEL_19555 = 'component_19555';
export function Component19555({ value = 19555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19555, 'data-value': derived.doubled }, children);
}
export default Component19555;
