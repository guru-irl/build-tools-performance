import React from 'react';
const LABEL_41492 = 'component_41492';
export function Component41492({ value = 41492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41492, 'data-value': derived.doubled }, children);
}
export default Component41492;
