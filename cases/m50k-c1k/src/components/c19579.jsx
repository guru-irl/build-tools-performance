import React from 'react';
const LABEL_19579 = 'component_19579';
export function Component19579({ value = 19579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19579, 'data-value': derived.doubled }, children);
}
export default Component19579;
