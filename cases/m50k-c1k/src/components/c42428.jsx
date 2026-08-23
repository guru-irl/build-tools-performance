import React from 'react';
const LABEL_42428 = 'component_42428';
export function Component42428({ value = 42428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42428, 'data-value': derived.doubled }, children);
}
export default Component42428;
