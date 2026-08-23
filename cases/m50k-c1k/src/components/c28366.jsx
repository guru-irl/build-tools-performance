import React from 'react';
const LABEL_28366 = 'component_28366';
export function Component28366({ value = 28366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28366, 'data-value': derived.doubled }, children);
}
export default Component28366;
