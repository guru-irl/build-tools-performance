import React from 'react';
const LABEL_37432 = 'component_37432';
export function Component37432({ value = 37432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37432, 'data-value': derived.doubled }, children);
}
export default Component37432;
