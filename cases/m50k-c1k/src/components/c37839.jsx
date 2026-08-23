import React from 'react';
const LABEL_37839 = 'component_37839';
export function Component37839({ value = 37839, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37839, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37839, 'data-value': derived.doubled }, children);
}
export default Component37839;
